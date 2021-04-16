import React, { useEffect, useState } from "react";
import { Hero } from "../components";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  return (
    <>
      <Hero />

      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          setName("");
          setEmail("");
          setQuery("");

          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000);
        }}
      >
        <h1>Contact Us</h1>

        <FormControl className={styles.formGroup}>
          <InputLabel htmlFor='name-input'>Name</InputLabel>
          <Input
            id='name-input'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormControl>

        <FormControl className={styles.formGroup}>
          <InputLabel htmlFor='email-input'>Email</InputLabel>
          <Input
            id='email-input'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl className={styles.formGroup}>
          <InputLabel htmlFor='query-input'>Query</InputLabel>
          <Input
            multiline
            id='query-input'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </FormControl>
        <Button type='submit' className={styles.formButton}>
          Submit
        </Button>
        <div className={`${styles.info} ${show && styles.show}`}>
          <Info />
          <p>Thanks! You're query has been sent to us</p>
        </div>
      </form>
    </>
  );
};

export default Contact;
