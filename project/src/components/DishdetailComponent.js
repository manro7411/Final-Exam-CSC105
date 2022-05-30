import React , {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Button ,Form,FormGroup,Label,Input} from "reactstrap";


const renderDish = (dish) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>
          <b>{dish.name}</b>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
};
const DishDetail = ({ dish }) => {
  const [name,setnName ] = useState("");
  const [score,setScore ] = useState("");
  const [comment,setComment ] = useState("")

  const handleName = (e) =>{
    setnName(e.target.value);
  }
  const handleScore = (e) =>{
    setScore(e.target.value);
  }
  const handleComment = (e) =>{
    setComment(e.target.value);
  }
  const handleSumbmit = ()=>{
    let word = `    Username : ${name}
    Score : ${score}
    Comment : ${comment}`
    alert(word);
}
  const taskvalidator = name !== ""
  return (
    <div className="row col-12">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="text" valid={taskvalidator} invalid={!taskvalidator}  name="email" id="exampleEmail" placeholder="with a placeholder" onChange={handleName} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">score</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={handleScore}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">comments</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={handleComment}/>
        </FormGroup>
      </Form>
      <Button outline color="primary" onClick={handleSumbmit}>Submit</Button>
      </div>      
      <div className="col-12 col-md-5 m-1">
      </div>
    </div>
  );
};

export default DishDetail;
