"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ContactImage from "../../../public/contact.png";
import Button from "../../component/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "../../validation/contactValidationSchema";
import { useRouter } from 'next/navigation';
const Contact = () => {
  const router = useRouter()
  const { register, handleSubmit, reset, formState:{errors} } = useForm({
		resolver: yupResolver(validationSchema),
		mode: "onChange",
	})

  const onSubmit=()=>{
     router?.push("/")
  }

  return (
    <div className={styles.contact}>
      <h1> Let's keep in Touch</h1>
      <div className={styles.belowcontact}>
        <Image
          className={styles.contactimage}
          src={ContactImage}
          width={300}
          height={300}
          alt="contact"
        />
        <div className={styles.inputgroup}>
          <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
            <inputgroup className={styles.inputgroups}>
              <label>Name:</label>
              <input
                className={styles.input}
                placeholder="name"
                {...register("name")}
                type="text"
              ></input>
              {errors.name && (
						<p>{errors.name.message}</p>
					)}
            </inputgroup>
            <inputgroup className={styles.inputgroups}>
              <label>Email:</label>
              <input
                className={styles.input}
                {...register("email")}
                placeholder="email"
                type="text"
              ></input>
              {errors.email && (
						<p >{errors.email.message}</p>
					)}
            </inputgroup>
            <inputgroup className={styles.inputgroups}>
              <label>Message:</label>
              <textarea
                className={styles.input}
                placeholder="message"
                {...register("message")}
                type="text"
              ></textarea>
            {errors.message && (
						<p >{errors.message.message}</p>
					)}
            </inputgroup>
            <button className={styles.button} type="submit" >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
