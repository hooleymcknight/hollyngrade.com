'use client';
import { useState } from 'react';
import { uploadMemory } from '../components/server/upload';
import BackButton from "../../components/backButton";

// 140MB, deliberately under the server's 150 — see note below
const MAX_BATCH_BYTES = 140 * 1024 * 1024;
const tooSmallNotToMakeThemWait = 40 * 1024 * 1024;

const buttonText = 'Submit';
const buttonThinkingText = 'Uploading...';
const stdErrMsgHTML = 'There was an error uploading your media. Please check the file size and&nbsp;type.';

/**
 * 
 * @returns the actual nodes
 */
export default function Upload() {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [requireChange, setRequireChange] = useState(false);
    const [wait, setWait] = useState(false);

    /**
     * 
     * @param {string} customMsg 
     */
    const fireError = (customMsg) => {
        const prevError = error;
        setError(customMsg ?? stdErrMsgHTML);

        // if the error message is already up, just have it flash real quick.
        if (prevError) {
            const errMsg = document.querySelector('.error-message');
            errMsg.classList.add('flash');
            setTimeout(() => {
                errMsg.classList.remove('flash');
            }, 550);
        }
        setUploading(false);
    }

    /**
     *  reset them messagessss, clear it out
     */
    const resetMessages = () => {
        setError(false);
        setSuccess(false);
    }

    /**
     * 
     * @param {*} formData 
     */
    const processFormData = async (formData) => {
        const form = document.querySelector('form#upload');

        // wait for a reply
        setTimeout(async () => {
            try {
                const result = await uploadMemory(formData);
                if (!result.success) {
                    fireError();
                }
                else {
                    setSuccess(true);
                    let bodyMessage = 'Someone has shared a memory through the online form.';
                    if (result.body && result.body.length) {
                        bodyMessage = result.body;
                    }

                    fetch('https://ntfy.sh/chasm_story_hollyn', {
                        method: 'POST', // PUT works too
                        // body: 'Someone has shared a memory through the online form.',
                        body: `${bodyMessage}`,
                        headers: {
                            'Title': 'Chasm memory submission received',
                            // 'Priority': 'normal',
                            'Tags': 'dog,heart'
                        }
                    })
                    .then(response => {
                        if (!response.ok) {
                            // This is where you catch the 400 error
                            return response.text().then(text => { throw new Error(text) });
                        }
                        return response.json();
                    })
                    .then(data => { console.log('Success:', data); setUploading(false); })
                    .catch(error => console.error('Error Details:', error.message));
                }
                form.reset();
            }
            catch (err) {
                console.error('Upload failed:', err);
                fireError();
            }
            finally {
                setUploading(false);
            }
        }, wait ? 2000 : 0);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = document.querySelector('form#upload');
        setUploading(true);

        if (!form.querySelector('#story').value?.trim() && !form.querySelector('#image').value?.trim()) {
            fireError('Please insert a photo or a story before&nbsp;submitting.');
            return;
        }

        await processFormData(new FormData(form));
    }

    const handleFileChange = (e) => {
        setRequireChange(false);
        setError(false);
        setWait(false);
        const files = Array.from(e.target.files);
        const total = files.reduce((sum, file) => sum + file.size, 0);

        if (total < tooSmallNotToMakeThemWait) setWait(true);

        if (total > MAX_BATCH_BYTES) {
            const mb = Math.round(total / 1024 / 1024);
            setRequireChange(true);
            setError(`That's ${mb}MB total, and the limit is 150MB per upload. Try uploading in smaller batches, or one big video at a&nbsp;time.`);
        }
    }

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <BackButton target='./' />
                <h1 className="text-4xl mt-6 mb-8 text-center block w-full tracking-tighter">Share Your Memories of Chasm</h1>
                
                <form
                    onSubmit={(e) => { handleSubmit(e) }}
                    id="upload"
                    className="flex flex-col items-center gap-6 mx-auto mb-4 max-w-full"
                >
                    <input id="image" name="image"
                        type="file" accept="image/*,video/*" multiple
                        onFocus={resetMessages}
                        onChange={(e) => {handleFileChange(e)}}
                    />
                    <label htmlFor="story">Feel free to share a story and/or condolences:</label>
                    <textarea id="story" onFocus={resetMessages} name="story" rows="8" //cols="40"
                        className="border-solid border-[1px] border-black rounded-[4px] p-2 bg-[#ffffff50] max-w-[380px] w-full mx-auto"
                        placeholder={'Your favorite memory of Chasm'} 
                    />
                    <button className="btn px-8 py-2 text-white rounded-[30px]" type="submit" disabled={uploading || requireChange}>
                        {uploading ? buttonThinkingText : buttonText}
                    </button>
                </form>
                <div className="w-full max-w-[500px] min-h-[72px] relative flex items-center justify-center mx-auto ">
                    { error ?
                        <span className="err-on absolute top-0 error-message text-[#731616] font-bold text-center">
                            {error.replace(/&nbsp;/g, "\u00A0")}
                        </span>
                    : null }

                    { success ? 
                        <span className="success-on absolute top-0 success-message text-[#0f4d15] font-bold text-center">
                            Success! Your memory has been uploaded. It will be reviewed then added to the&nbsp;gallery.
                        </span>
                    : null }
                </div>
            </div>
        </main>
    );
}