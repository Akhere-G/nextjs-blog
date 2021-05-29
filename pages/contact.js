import React, { useState } from "react";
import * as yup from "yup";
import { FormTextField } from "../components";
import { Button } from "@material-ui/core";

import { Formik, Form } from "formik";

import { Info } from "@material-ui/icons";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    query: "",
  });

  const handleSubmit = (data, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    setShow(true);
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    }).then(res => {
      res.status === 200
        ? console.log("success: ", res)
        : console.log("failute: ", res);
    });

    setSubmitting(false);
    resetForm();

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required().max(30),
    email: yup.string().email().required().max(30),
    subject: yup.string().required().max(30),
    query: yup.string().required().max(2000),
  });

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ ...data }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(values, isSubmitting, errors) => (
          <Form className={styles.form}>
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit facere eveniet tempora vero maxime corrupti? Qui nihil
              suscipit, iure doloremque dicta eaque maiores placeat, quisquam
              quibusdam culpa nemo et architecto perspiciatis ad veritatis at,
              impedit error aliquid! Sunt, modi.
            </p>
            <FormTextField name='name' id='name' placeholder='name' />
            <FormTextField name='email' id='email' placeholder='email' />
            <FormTextField name='subject' id='subject' placeholder='subject' />
            <FormTextField
              name='query'
              id='query'
              placeholder='query'
              multiline
            />
            <Button type='submit' className={styles.formButton}>
              Submit
            </Button>
            <div className={`${styles.info} ${show && styles.show}`}>
              <Info />
              <p>Thanks! Your query has been sent to us</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
