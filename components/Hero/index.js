import { Container } from "./HeroComponents";

const Hero = () => {
  return (
    <Container
      width='300px'
      height='400px'
      layout='responsive'
      src='/hero.jpg'
    />
  );
};

export default Hero;
