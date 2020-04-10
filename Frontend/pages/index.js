import Link from "next/link";
import Base from '../components/base';
import '../styles/homepage.sass';

const HomePage = (props) => {
  return (
    <Base loginRequired >
      <Link href="/analyse/cell-segmentation"><a>Cell Segmentation</a></Link>
    </Base>
  )
};

export default HomePage;