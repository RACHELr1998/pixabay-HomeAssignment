import Card from "react-bootstrap/Card";

function Info({ image }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>
          Views: {image.views}
          <br></br>
          Downloads: {image.downloads}
          <br></br>
          Collection: {image.collections}
          <br></br>
          Comments: {image.comments}
          <br></br>
          Likes: {image.likes}
          <br></br>
        </Card.Text>
        <Card.Link href={image.largeImageURL} target="_blank">
          Click to display
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Info;
