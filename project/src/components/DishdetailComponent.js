import React , {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle,Button ,Form,FormGroup,Label,Input,Modal,ModalHeader,ModalBody} from "reactstrap";


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
  const [comment,setComment ] = useState("");
  const [open,setOpen] = useState(false);
  const [number,setNumber] = useState(dish.like);

  const handleName = (e) =>{
    setnName(e.target.value);
  }
  const handleScore = (e) =>{
    setScore(e.target.value);
  }
  const handleComment = (e) =>{
    setComment(e.target.value);
  }
  const toggleModal = () =>{
    setOpen(!open);
  }
  const handleSumbmit = ()=>{
    let word = `    Username : ${name}
    Score : ${score}
    Comment : ${comment}`
    alert(word);
}
  const onLike = () =>{
    setNumber(number+1);
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
      <Button className="me-2" outline color="primary" onClick={handleSumbmit}>Submit</Button>
      <Button  onClick={toggleModal}>Info</Button>
      <Modal isOpen={open} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}>number of like {number} </ModalHeader>
                        <ModalBody>
                        <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                        <Button className='my-3' onClick={onLike}>Like</Button>
                        </ModalBody>
                    </Modal>
      </div>      
      <div className="col-12 col-md-5 m-1 ">
      </div>
    </div>
  );
};

export default DishDetail;
