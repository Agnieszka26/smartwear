import { Container } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
export default function Loading() {
  return (
    <Container>
      <Stack spacing={5}>
        <Skeleton variant="rectangular" animation="wave" height="33vh" />
        <Skeleton variant="rectangular" animation="wave" height="33vh" />
        <Skeleton variant="rectangular" animation="wave" height="33vh" />
        <Skeleton variant="rectangular" animation="wave" height="33vh" />
      </Stack>
    </Container>
  );
}
