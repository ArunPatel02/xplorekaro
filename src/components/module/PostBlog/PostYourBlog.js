import { Box, Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { makeStyles } from "@mui/styles";
import { FieldArray, Formik } from "formik";
import ImageDrop from "./ImageDrop";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  nav_inner: {
    maxWidth: "1140px",
  },
  editing_nav: {
    position: "fixed",
    zIndex: "10",
    background: "white",
    top: "70px",
    left: "0px",
    right: "0px",
    padding: "15px 30px",
    borderBottom: "2px solid #eee",
    display: "flex",
    justifyContent: "center",
  },
  add_items: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    width: "fit-content",
    "& svg": {
      color: "var(--yellow)",
      fontSize: "1.8rem",
    },
  },
  add_item_type: {
    fontSize: "1.5rem",
  },
  add_textArea: {
    padding: "10px",
    paddingBottom: "5px",
    marginTop: "15px",
    border: "none",
    fontSize: "2.4rem",
    height: "fi-content",
    outline: "none",
    resize: "none",
    fontWeight: "600",
    "&:focus": {
      borderBottom: "1px solid black",
    },
  },
  add_textArea_para: {
    padding: "10px",
    paddingBottom: "5px",
    border: "none",
    marginTop: "5px",
    fontSize: "1.4rem",
    height: "fit-content",
    outline: "none",
    resize: "none",
    "&:focus": {
      borderBottom: "1px solid black",
    },
  },
  load_btn: {
    padding: "16px 10rem",
    width: "fit-content",
    borderRadius: "10px",
    fontSize: "1.6rem",
    fontWeight: "600",
    // marginTop: "40px",
    color: "white",
    backgroundColor: "var(--yellow)",
    transition: "all .3s",
    "&:hover": {
      color: "var(--yellow)",
      backgroundColor: "white",
      boxShadow: "4px 4px 10px #eee",
    },
  },
});

const PostYourBlog = () => {
  const classes = useStyles();

  return (
    <Formik initialValues={{ blog: [{ type: "main heading", value: "" }] }}>
      <FieldArray name="blog">
        {(props) => {
          //   console.log(props, "field array props");
          const { push, remove } = props;
          return (
            <>
              <Box className={classes.editing_nav}>
                <Grid container spacing={2} className={classes.nav_inner}>
                  <Grid item md={2} sm={4}>
                    <Box
                      className={classes.add_items}
                      onClick={() => push({ type: "heading", value: "" })}
                    >
                      <FontDownloadOutlinedIcon />
                      <Typography
                        variant="body1"
                        className={classes.add_item_type}
                      >
                        Add Heading
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2} sm={4}>
                    <Box
                      className={classes.add_items}
                      onClick={() => push({ type: "paragraph", value: "" })}
                    >
                      <SegmentOutlinedIcon />
                      <Typography
                        variant="body1"
                        className={classes.add_item_type}
                      >
                        Add Paragraph
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={2} sm={4}>
                    <Box
                      className={classes.add_items}
                      onClick={() => push({ type: "image", value: {} })}
                    >
                      <AddPhotoAlternateOutlinedIcon />
                      <Typography
                        variant="body1"
                        className={classes.add_item_type}
                      >
                        Add Images
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                className="app_container"
                style={{ minHeight: "80vh", marginTop: "130px" }}
              >
                {props.form.values.blog.length > 0 &&
                  props.form.values.blog.map((item, index) => {
                    if (item.type === "main heading") {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <TextareaAutosize
                            aria-label="main heading textarea"
                            name={`blog[${index}].value`}
                            onChange={props.form.handleChange}
                            placeholder="Type Main Heading..."
                            className={classes.add_textArea}
                            style={{ width: "100%" }}
                          />
                          {/* <DeleteIcon
                            style={{ fontSize: "2rem", marginTop: "15px" , cursor : "pointer" }}
                          /> */}
                        </div>
                      );
                    } else if (item.type === "heading") {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <TextareaAutosize
                            aria-label="heading textarea"
                            name={`blog[${index}].value`}
                            onChange={props.form.handleChange}
                            placeholder="Type Heading..."
                            className={classes.add_textArea}
                            style={{ width: "100%" }}
                          />
                          <DeleteIcon
                            onClick={() => remove(index)}
                            style={{
                              fontSize: "2rem",
                              marginTop: "15px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      );
                    } else if (item.type === "paragraph") {
                      return (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <TextareaAutosize
                            aria-label="paragraph textarea"
                            name={`blog[${index}].value`}
                            onChange={props.form.handleChange}
                            placeholder="Type Description...."
                            className={classes.add_textArea_para}
                            style={{ width: "100%" }}
                          />
                          <DeleteIcon
                          onClick={() => remove(index)}
                            style={{
                              fontSize: "2rem",
                              marginTop: "15px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      );
                    } else if (item.type === "image") {
                      return (
                        <>
                          <DeleteIcon
                          onClick={() => remove(index)}
                            style={{
                              fontSize: "2rem",
                              marginTop: "15px",
                              cursor: "pointer",
                              float: "right",
                            }}
                          />
                          <ImageDrop
                            index={index}
                            setFieldValue={props.form.setFieldValue}
                          />
                        </>
                      );
                    }
                  })}
                {props.form.values.blog.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "35px",
                    }}
                  >
                    <Button disableElevation className={classes.load_btn}>
                      Post Your Blog
                    </Button>
                  </div>
                )}
              </Box>
            </>
          );
        }}
      </FieldArray>
    </Formik>
  );
};

export default PostYourBlog;
