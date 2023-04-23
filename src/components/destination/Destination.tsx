import { Card, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import { DestinationDTO } from "../../models/location/DestinationDTO";
import { ImageDTO } from "../../models/location/ImageDTO";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export interface DestinationProps {
  destination: DestinationDTO;
}

const Destination = ({ destination }: DestinationProps) => {
  const getImgSrc = (img: ImageDTO): string => {
    return `http://localhost:8080${img.imagePath}`;
  };

  return (
    <Card sx={{ width: "35vw", margin: "1rem", display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={getImgSrc(destination.images[0])}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {destination.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {destination.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Destination;
