import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log('send');
    reset();
  };

  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     console.log(e.target);

  //     const formData = new FormData(e.target);
  //     for (let pair of formData.entries()) {
  //       console.log(pair[0] + ': ' + pair[1]);
  //     }
  //   };

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} /* onSubmit={submitForm} */ className={styles.form}>
        <h5 className={styles.form__name}>Оставить заявку на партнерство</h5>

        <div className={styles.topBlock}>
          <div className={styles.leftTop}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
              className={`${errors?.name ? styles.inputError : styles.inputName}`} //styles.inputName
              {...register('name', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком длинное имя',
                },
                pattern: {
                  value: /^[A-Za-zА-ЯЁа-яё]+$/,
                  message: 'Только буквы',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.name && <p>{errors?.name.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="secondname"
              name="secondname"
              type="text"
              placeholder="Фамилия"
              className={styles.inputName}
              {...register('secondname', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком много символов',
                },
                pattern: {
                  value: /^[A-Za-zА-ЯЁа-яё]+$/,
                  message: 'Только буквы',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.secondname && <p>{errors?.secondname.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="thirdname"
              name="thirdname"
              type="text"
              placeholder="Отчество"
              className={styles.inputName}
              {...register('thirdname', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком много символов',
                },
                pattern: {
                  value: /^[A-Za-zА-ЯЁа-яё]+$/,
                  message: 'Только буквы',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.thirdname && <p>{errors?.thirdname.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="country"
              name="country"
              type="text"
              placeholder="Страна"
              className={styles.inputName}
              {...register('country', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком много символов',
                },
                pattern: {
                  value: /^[A-Za-zА-ЯЁа-яё]+$/,
                  message: 'Только буквы',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.country && <p>{errors?.country.message || 'Неверно заполнено'}</p>}
            </div>
          </div>

          <div className={styles.rightTop}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Эл. адрес"
              className={`${errors?.email ? styles.inputError : styles.inputName}`} //styles.inputName
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком длинное имя',
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Некорректный адрес',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.email && <p>{errors?.email.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="Телефон"
              className={styles.inputName}
              {...register('phone', {
                minLength: {
                  value: 7,
                  message: 'Минимум 7 символов',
                },
                maxLength: {
                  value: 15,
                  message: 'Слишком длинный номер',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.phone && <p>{errors?.phone.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Название компании или ИП"
              className={styles.inputName}
              {...register('company', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 30,
                  message: 'Слишком много символов',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.company && <p>{errors?.company.message || 'Неверно заполнено'}</p>}
            </div>

            <input
              id="city"
              name="city"
              type="text"
              placeholder="Город"
              className={styles.inputName}
              {...register('city', {
                minLength: {
                  value: 3,
                  message: 'Минимум 3 символа',
                },
                maxLength: {
                  value: 20,
                  message: 'Слишком много символов',
                },
                pattern: {
                  value: /^[A-Za-zА-ЯЁа-яё]+$/,
                  message: 'Только буквы',
                },
              })}
            />
            <div className={styles.errortext}>
              {errors?.city && <p>{errors?.city.message || 'Неверно заполнено'}</p>}
            </div>
          </div>
        </div>

        <div className={styles.bottomBlock}>
          <label htmlFor="textarea" className={styles.textLabel}>
            Описание
          </label>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Чем занимаетесь, где находитесь, есть ли шоурум?"
            className={styles.textarea}
            {...register('textarea', {
              minLength: {
                value: 3,
                message: 'Минимум 3 символа',
              },
              maxLength: {
                value: 200,
                message: 'Слишком много символов',
              },
            })}
          />
          <div className={styles.errortext}>
            {errors?.textarea && <p>{errors?.textarea.message || 'Неверно заполнено'}</p>}
          </div>
        </div>

        <button type="submit" /* disabled={!isValid} */ className={styles.button}>
          Отправить
        </button>
      </form>

      <div className={styles.contacts}>
        <h5 className={styles.form__name}>Наши контакты</h5>

        <div className={styles.contacts__items}>
          <div className={styles.contacts__item}>
            <p className={styles.contacts__type}>Почта</p>
            <p className={styles.contacts__info}>info@canyon.com</p>
          </div>
          <div className={styles.contacts__item}>
            <p className={styles.contacts__type}>Телефон</p>
            <p className={styles.contacts__info}>+35797625</p>
          </div>
          <div className={styles.contacts__item}>
            <p className={styles.contacts__type}>Адрес</p>
            <p className={styles.contacts__info}>Ermou 16, Larnaca 6023, Cyprus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
