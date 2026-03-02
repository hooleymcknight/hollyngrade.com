export default function DonationButtons () {
    return (
        <div id="donation-buttons" className="flex flex-row flex-wrap justify-center items-center w-full">
            <a className="inline-block border-[#222] mt-4 mx-2 px-6 py-1 text-white rounded-[30px]"
                target="_blank" href="https://paypal.me/hooleymcknight" alt="donate via paypal">
                    PayPal
            </a>
            <a className="inline-block border-[#222] mt-4 mx-2 px-6 py-1 text-white rounded-[30px]"
                target="_blank" href="https://venmo.com/hooleymcknight" alt="donate via venmo">
                    Venmo
            </a>
            <a className="inline-block border-[#222] mt-4 mx-2 px-6 py-1 text-white rounded-[30px]"
                target="_blank" href="https://streamelements.com/hollyngrade/tip" alt="donate via streamelements (paypal only)">
                    StreamElements
            </a>
        </div>
    );
}