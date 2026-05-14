'use client';
import { uploadMemory } from '../components/server/upload';
import BackButton from "../../components/backButton";

export default function Upload() {
    const buttonText = 'Submit';
    const buttonThinkingText = 'Uploading...';

    const resetMessages = () => {
        console.log('reset please')
        document.querySelector('.error-message').classList.remove('err-on');
        document.querySelector('.success-message').classList.remove('success-on');
    }

    const handleSubmit = async (e) => {
        const btn = document.querySelector('form#upload').querySelector('button');
        btn.textContent = buttonThinkingText;
        // wait for a reply
        setTimeout(async () => {
            const result = await uploadMemory(e);
                if (!result.success) {
                    document.querySelector('.error-message').classList.add('err-on');
                }
                else {
                    document.querySelector('.success-message').classList.add('success-on');
                    fetch('https://ntfy.sh/chasm_story_hollyn', {
                        method: 'POST', // PUT works too
                        body: 'Someone has shared a memory through the online form.',
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
                    .then(data => console.log('Success:', data))
                    .catch(error => console.error('Error Details:', error.message));
                }
                btn.textContent = buttonText;
        }, 2000)
    }

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div id="photo-gallery" className="flex w-[95%] max-w-3xl flex-col items-center justify-between py-8 px-8 sm:px-16 bg-zinc-50 sm:items-start mt-8 mb-8"
                style={{ background: "rgba(250, 250, 250, 0.6)" }}
            >
                <BackButton target='./' />
                <h1 className="text-4xl mt-6 mb-8 text-center block w-full tracking-tighter">Share Your Memories of Chasm</h1>
                
                <form action={(e) => handleSubmit(e)} id="upload" className="flex flex-col items-center gap-6 mx-auto mb-4 max-w-full">
                    <input id="image" onFocus={resetMessages} type="file" name="image" accept="image/*" />
                    <label htmlFor="story">Feel free to share a story and/or condolences:</label>
                    <textarea id="story" onFocus={resetMessages} name="story" rows="8" //cols="40"
                        className="border-solid border-[1px] border-black rounded-[4px] p-2 bg-[#ffffff50] max-w-[380px] w-full mx-auto"
                        placeholder={'Your favorite memory of Chasm'} 
                    />
                    <button type="submit" className="btn px-8 py-2 text-white rounded-[30px]">{buttonText}</button>
                </form>
                <div className="w-full max-w-[500px] min-h-[50px] relative flex items-center justify-center mx-auto ">
                    <span className="absolute top-0 error-message text-[#731616] font-bold text-center">There was an error uploading your photo. Please check the file size and&nbsp;type.</span>
                    <span className="absolute top-0 success-message text-[#0f4d15] font-bold text-center">Success! Your memory has been uploaded. It will be reviewed then added to the&nbsp;gallery.</span>
                </div>
            </div>
        </main>
    );
}