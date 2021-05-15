import React from "react";
import { Card, Image, List } from "semantic-ui-react";

const SkillBox = (props) => {
    const { title, listItems } = props;
    return (
        <Card color={"teal"} raised>
            <Card.Content>
                <Card.Header className="skillsHeading">{title}</Card.Header>
                <div style={{ textAlign: "center" }}>
                    <List animated verticalAlign="middle">
                        {listItems.map(([skill, imgUrl]) => (
                            <List.Item key={skill}>
                                <Image
                                    height={40}
                                    src={imgUrl}
                                    className="skillImage"
                                    alt={skill}
                                />
                                <List.Content>
                                    <List.Header className="skillName">
                                        {skill}
                                    </List.Header>
                                </List.Content>
                            </List.Item>
                        ))}
                    </List>
                </div>
            </Card.Content>
        </Card>
    );
};

export default SkillBox;
