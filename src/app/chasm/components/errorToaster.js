import { useSession, updateSession } from "@/app/SessionProvider";

export default function ErrorToaster() {
    const session = useSession().session;

    updateSession({ errorToaster: false });

    if (session?.errorToaster) {
        return (
            <div id="error-toaster"
                className="fixed bottom-[-200px] right-[30px] max-w-[350px] bg-[#fafafa99]
                    px-8 py-6 ease-in-out z-[100]"
            >
                <h3 className="mb-6 font-bolder text-xl">Error: {session.errorToaster.title}</h3>
                <p>{session.errorToaster.message}</p>
                <button class="block mr-0 ml-[auto] mt-6 rounded border-1 border-solid border-[black] px-4 font-bold">
                    <span className="text-lg">⨯</span> Dismiss
                </button>
            </div>
        );
    }
}