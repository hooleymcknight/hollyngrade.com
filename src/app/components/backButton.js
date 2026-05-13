import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function BackButton(props) {
    const router = useRouter();

    return (
        <button type="button" className="go-back" onClick={() => router.push(props.target)}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
    );
}