import React, { Component } from 'react'
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Loader from './Loader';

const SortableItem = SortableElement(({ value }) => {
    return (
        <img className="img-fluid img-thumbnail col-lg-3 col-md-4 col-6" src={value} alt="logo" />
    )
});

const SortableList = SortableContainer(({ items }) => {
    return (
        <div className="mt-4 text-center">
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </div>
    );
});

class DraggableImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.images || []
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex)
        }));
    };

    render() {
        const { items } = this.state
        const { title = '' } = this.props
        return (
            <div className="container">
                <h1 className="font-weight-light text-center bg-gray rounded mt-4 mb-0">{title}</h1>
                {items.length > 0 ?
                    <SortableList
                        axis="xy"
                        items={items}
                        onSortEnd={this.onSortEnd}
                    />
                    :
                    <Loader loading={true} />
                }

            </div>
        )
    }
}
export default DraggableImages;