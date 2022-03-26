import styles from "./User.module.css";
import { Card } from "react-bootstrap";

function User(props) {
  const { user } = props;

  return (
    <Card>
      <Card.Body className={`${styles.card} m-5 text-center`}>
        <p>
          <strong>Name:</strong>
        </p>
        <p>{`${user.first_name} ${user.last_name}`}</p>
        <p>
          <strong>Email:</strong>
        </p>
        <p>{`${user.email}`}</p>
        <img src={`${user.avatar}`} alt="user-face" />
      </Card.Body>
    </Card>
  );
}

export default User;
