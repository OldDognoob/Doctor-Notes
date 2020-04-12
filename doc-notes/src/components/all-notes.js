import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllNotesDiv = styledDiv`
    display:flex;
    flex-direction: column;
    padding:15px;
    h4{
        border:1px solid blue;
    }
    .all-notes {
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-around;

    .note-link{
        text-decoration: none;
    }
    .note-preview {
        border : 1px solid lightgray;
        background: white;
        width:200px;
        height:200ps;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        h3{
            margin: 10px 10px 5px 10px;
            width: 80%;
            text-decoration: none;
            border-bottom: 1px solid black:
        }
        p {
            width: 80%;
            height: 70%;
            overflow: hidden;
            text-decoration: none;
            margin: 0;
            line-height: 23px;
            font-size: 14px;
            font: roboto;
        }
    }
    }
`;
export default class AllNotes extends Component {
    construction(props){
        super(props);
        this.state ={
            notes=this.props.notes,
        }
    }
    render(){
        console.log(this.props.notes)
        return (
            <AllNotesDiv>
                <h3>Your Notes:</h3>
                <div classNames="all-notes">
                    {this.props.notes.map(note => {
                        return (
                            <Link className="note-link"key={note._id} to={`/all-notes/${notes._id}`}>
                                <div className="note-preview">
                                    <h3>{note.title}</h3>
                                    <p>{note.textBody}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </AllNotesDiv>
        );
    }
}
