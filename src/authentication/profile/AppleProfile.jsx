import React, { useState, useEffect } from "react";
import scss from "./AppleProfile.module.scss";
import { useAuth } from "../../context/AppleAuthContext";

const AppleProfile = () => {
  const { user, updateProfileUser } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  //! обновление изменений
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  //! обработчик изменения
  const handleUpdate = () => {
    if (photoURL.length > 2000) {
      alert("URL-адрес фотографии слишком длинный (макс. 2000 символов)");
      return;
    }
    updateProfileUser(displayName, photoURL);
  };

  //! обработчик отмены
  const handleCancel = () => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  };

  if (!user) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={scss["apple-profile"]}>
      <div className={scss["profile-container"]}>
        <div className={scss["profile-header"]}>
          <h1>Личные данные</h1>
        </div>
        <div className={scss["profile-content"]}>
          <div className={scss["form-group-row"]}>
            <div className={scss["form-group-photo"]}>
              <label htmlFor="photoURL">Фото пользователя</label>
              <img
                src={photoURL || "/default-avatar.png"}
                alt="Фото пользователя"
              />
            </div>

            <div className={scss["form-group"]}>
              <label htmlFor="photoURL">Фото URL</label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Введите URL фото"
              />
            </div>

            <div className={scss["form-group"]}>
              <label htmlFor="displayName">Имя</label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Введите имя"
              />
            </div>

            <div className={scss["form-group"]}>
              <label htmlFor="lastName">Фамилия</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName || ""}
                placeholder="Введите фамилию"
              />
            </div>
          </div>

          <div className={scss["form-group"]}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email || ""}
              disabled
              placeholder="Email"
            />
          </div>

          <div className={scss["form-group"]}>
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phoneNumber || ""}
              placeholder="+996 (___) ___-__-__"
            />
          </div>

          <div className={scss["form-actions"]}>
            <button className={scss["btn-primary"]} onClick={handleUpdate}>
              Сохранить изменения
            </button>
            <button className={scss["btn-secondary"]} onClick={handleCancel}>
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleProfile;
