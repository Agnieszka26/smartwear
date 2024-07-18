import team1 from "@/assets/images/team1.jpg";
import team2 from "@/assets/images/team2.jpg";
import team3 from "@/assets/images/team3.jpg";
import team4 from "@/assets/images/team4.jpg";
import team5 from "@/assets/images/team5.jpg";
import { AnimateText } from "@/attoms/animateOnScroll/AnimateOnScroll";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const team = [
  { src: team1, alt: "team1" },
  { src: team4, alt: "team1" },
  { src: team5, alt: "team1" },
  { src: team2, alt: "team1" },
  { src: team3, alt: "team1" },
];
const about = () => {
  return (
    <Container className=" h-full flex justify-center items-center">
      <Grid
        container
        className="container flex justify-center items-center gap-12"
      >
        <Grid item sm={4}>
          <AnimateText>
            <Typography
              variant="h2"
              fontSize={36}
              padding={"2rem 0"}
              className="text-zinc-700 font-bold font-LibreFranklin text-end"
            >
              Poznaj nasz kreatywny zespół
            </Typography>
            <Typography
              variant="body1"
              fontSize={16}
              className="text-zinc-500 font-medium font-Inter text-end"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              amet iste fugiat adipisci eos exercitationem illo quis eaque
              nostrum cumque eum, aperiam necessitatibus, quas, deleniti
              veritatis? Dolores veniam atque dolor.
            </Typography>
          </AnimateText>
        </Grid>
        <Grid item sm={7}>
          <Grid container spacing={3}>
            {team.map(({ alt, src }, i) => {
              return (
                <Grid key={alt} item sm={4}>
                  <AnimateText delay={Number(`0.${i}`)}>
                    <Image
                      src={src}
                      alt={alt}
                      className="z-0 rounded-xl shadow-2xl shadow-zinc-500"
                    />
                  </AnimateText>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default about;
