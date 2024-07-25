import { Col } from "react_boostrap"

export const ProjectsCard =({title, description, imgUrl}) => {
  return (
    <Col sm={6} ms={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
