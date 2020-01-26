import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        description: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChange2 = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            description: this.state.description
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Item</Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Title</Label>
                                <Input type="text"
                                name="name"
                                description="description"
                                id="item"
                                onChange={this.onChange}
                                />
                                <Label for="Description">Description</Label>
                                <Input type="text"
                                description="description"
                                id="description"
                                onChange={this.onChange2}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                    Enter
                                </Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

const mapStateToPros = (state) => ({
    item: state.item
})

export default connect(mapStateToPros, { addItem })(ItemModal);