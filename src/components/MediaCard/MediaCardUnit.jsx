import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./MediaCard.css";

export const MediaCardUnit = ({ img, label, onClick }) => {
  return (
    <Card className="card" style={{margin:'1%'}}> 
      <CardActionArea onClick={() => onClick()}>
        <CardMedia className="card_media" image={img} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
