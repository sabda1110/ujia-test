import Vector from '../components/elements/svg/Vector';
import VectorDua from '../components/elements/svg/VectorDua';
import VectorTiga from '../components/elements/svg/VectorTiga';
import BodyLandingPage from '../components/fragments/BodyLandingPage';
import NavbarLangingPage from '../components/fragments/NavbarLangingPage';

const LandingPage: React.FC = () => {
  return (
    <div className=" h-screen relative w-screen overflow-hidden">
      <NavbarLangingPage />
      <Vector />
      <VectorDua />
      <VectorTiga />
      <BodyLandingPage />
    </div>
  );
};

export default LandingPage;
