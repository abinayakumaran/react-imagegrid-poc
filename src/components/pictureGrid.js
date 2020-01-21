import React, { Component } from 'react'
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const getItems = count =>
    Array.from({ length: count }, (i, j) => j).map(j => (
        "https://s3-ap-southeast-2.amazonaws.com/images.getjarvis.com.au/9068b2bd089c037a144fc847b9967ee83dce0fe5299261a884adc3241a33604b.jpeg"
    ));

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

class PictureGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(10),
            // items: [
            //     "https://source.unsplash.com/pWkk7iiCoDM/400x300",
            //     "https://source.unsplash.com/aob0ukAYfuI/400x300",
            //     "https://source.unsplash.com/EUfxH-pze7s/400x300",
            //     "https://source.unsplash.com/M185_qYH8vg/400x300",
            //     "https://source.unsplash.com/sesveuG_rNo/400x300",
            //     "https://source.unsplash.com/AvhMzHwiE_0/400x300",
            //     "https://source.unsplash.com/2gYsZUmockw/400x300",
            //     "https://source.unsplash.com/EMSDtjVHdQ8/400x300",
            //     "https://source.unsplash.com/8mUEy0ABdNE/400x300",
            //     "https://source.unsplash.com/G9Rfc1qccH4/400x300",
            //     "https://source.unsplash.com/aJeH0KcFkuc/400x300",
            //     "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",
            // ]
        }
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex)
        }));
    };

    render() {
        const { items } = this.state
        return (
            <div className="container">
                <h1 className="font-weight-light text-center bg-gray rounded mt-4 mb-0">Image Gallery</h1>
                <SortableList
                    axis="xy"
                    items={items}
                    onSortEnd={this.onSortEnd}
                />
            </div>
        )
    }
}
export default PictureGrid;