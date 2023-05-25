import {Component} from "react";
import React from "react";
import {DropzoneArea} from "material-ui-dropzone";
import {
    TheatersRounded,
    ImageRounded,
    AttachFileRounded,
    InsertDriveFileRounded,
} from "@material-ui/icons";
import "./UploadFile.css";
import Button from "react-bootstrap/Button";
import {CardContent} from "@material-ui/core";
import {Card} from "react-bootstrap";
import axios from "axios";

export default class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
        };
    }

    handleChange = (files) => {
        this.setState({
            files: files,
        });
    };

    handleUploadButton = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (const file of this.state.files) {
            formData.append("file", file);
        }
        console.log(this.state.files[0]);

        let url =
            "http://localhost:8082/workout/upload/1";
        let response = await axios.put(url, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        console.log(response)
    };



    render() {
        return (
            <Card id={"wrapper-card"}>
                <CardContent>
                    <div id={"wrapper"}>
                        <div id={"dropzone"}>
                            <DropzoneArea
                                className={"DropzoneArea"}
                                acceptedFiles={["image/*", "video/*", "application/*"]}
                                onChange={this.handleChange.bind(this)}
                                showFileNames
                                maxFileSize={5000000000}
                                dropzoneText="Upload files here"
                                filesLimit={20}
                                multiline
                                maxRows={1}
                                getPreviewIcon={(fileObject, classes) => {
                                    const {type} = fileObject.file;
                                    const iconProps = {
                                        className: classes.image,
                                    };

                                    if (type.startsWith("video/"))
                                        return <TheatersRounded {...iconProps} />;
                                    if (type.startsWith("image/"))
                                        return <ImageRounded {...iconProps} />;
                                    if (type.startsWith("application/"))
                                        return <InsertDriveFileRounded {...iconProps} />;
                                    else return <AttachFileRounded {...iconProps} />;
                                }}
                            />
                        </div>
                        <label htmlFor={"dropzone"} id={"dropzone-label"}>
                            Accepted files: word, power-point, image, video
                        </label>
                        <Button
                            id={"upload-button"}
                            onClick={this.handleUploadButton}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Finish
                        </Button>
                    </div>
                </CardContent>
            </Card>
            // <div>Drag and drop</div>
        );
    }
}
