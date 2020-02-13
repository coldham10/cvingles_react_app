import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import CVEntry from './CVEntry.js';

class CVEntryGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    getLength(type) {
        const lengthDict = {
            "degreeName":   12, "startYear":    4,
            "endYear":      4,  "grade":        4,
            "university":   6,  "location":     6,
            "desc":         12, "title":        12,
            "employer":     6,  "achievements":  12,
            "achievement":  12}
        return lengthDict[type];
    }

    groupName(type, idx) {
        switch(type) {
            case "degree": return `Carrera ${idx + 1}`;
            case "job": return `Trabajo ${idx + 1}`;
            case "achievements": return `Logros`;
            default: return "Unknown group";
        }
    }

    render() {
        const rows = [];
        let row = [];
        let rowLength = 0;
        this.props.data.forEach((entry, idx) => {
            if (rowLength + this.getLength(entry.type) <= 12) {
                if (entry.type === "achievements")  {
                    row.push(
                        <Form.Group as={Col} md={this.getLength(entry.type)} key={idx}>
                            <CVEntryGroup
                                type={entry.type}
                                data={entry.value}
                                idx={idx}
                                extensible
                            />
                        </Form.Group>
                    );
                }
                else {
                    row.push(
                        <Form.Group as={Col} md={this.getLength(entry.type)} key={idx}>
                            <CVEntry
                                type={entry.type}
                                data={entry.value}
                                idx={idx}
                            />
                        </Form.Group>
                    );
                }
            }
            rowLength += this.getLength(entry.type);
            if (rowLength >=12) {
                rows.push(
                    <Form.Row key={idx}>
                        {row}
                    </Form.Row>
                );
                row = [];
                rowLength = 0;
            }
        });
        const footer = this.props.extensible ? <Button variant="link">Más</Button> : null;
        return (
            <Container className="entry-group border rounded">
            <h3>{this.groupName(this.props.type, this.props.idx)}</h3>
                {rows}
                {footer}
            </Container>
        );
    }
}

export default CVEntryGroup;
