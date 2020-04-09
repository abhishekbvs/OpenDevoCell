import Link from "next/link";
import Base from '../components/base';
import '../styles/homepage.sass';

const HomePage = (props) => {
  return (
    <Base loginRequired >
      <Link href="/analyse/cell-segmentation">Cell Segmentation</Link>
    </Base>
  )
};

export default HomePage;