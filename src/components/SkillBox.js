import React from 'react';
import {Card, Image, List} from 'semantic-ui-react'

const SkillBox = (props) => {
    const {title, listItems} = props
    return (
        <Card>
            <Card.Content>
                <Card.Header className="skillsHeading">{title}</Card.Header>
                <div style={{"text-align": "center"}}>
                    <List animated verticalAlign='middle'>
                        {listItems.map(([skill, imgUrl]) => <List.Item>
                            <Image height={40} src={imgUrl} className="skillImage"/>
                            <List.Content>
                                <List.Header className="skillName">
                                    {skill}
                                </List.Header>
                            </List.Content>
                        </List.Item>)}
                    </List>
                </div>
            </Card.Content>
        </Card>
    )
}

export default SkillBox;