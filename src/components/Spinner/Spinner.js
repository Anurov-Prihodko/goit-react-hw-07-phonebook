import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return (
    <div className="spinner">
      <Loader type="Audio" color="#ffed4f" height={60} width={60} />
    </div>
  );
}
