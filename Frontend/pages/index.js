import Link from "next/link";
import Base from '../components/base';
import '../styles/homepage.sass';

const HomePage = (props) => {
  return (
    <Base loginRequired >
      <h6>DevoWorm Dashboard</h6>
      <Link href="/analyse/cell-segmentation"><a>Cell Segmentation</a></Link>
    </Base>
  )
};

export default HomePage;