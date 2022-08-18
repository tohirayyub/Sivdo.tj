import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function RealEstateCategForSteps({
  onChangeInput,
  checkedTrade,
  checkedExchange,
  setImages,
}) {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setImages(selectedFiles);
  };

  return (
    <div className="second__form_companent">
      <span>Заполните пустые поля</span>
      <div className="input__title">
        <form>
          <div>
            <span>Заголовок:</span>
            <input
              onChange={onChangeInput("title")}
              maxlength="40"
              type="text"
              placeholder="Новый квартира"
            />
          </div>

          <div>
            <span>Район:</span>
            <input
              onChange={onChangeInput("region")}
              maxlength="40"
              type="text"
              placeholder="Душанбе"
            />
          </div>
          <div className="float__step">
            <div>
              <span>Этаж:</span>
              <input
                onChange={onChangeInput("floor")}
                placeholder="9"
                type="number"
                step="1"
                max="99"
              />
            </div>
            <div>
              <span>Площадь:</span>
              <input
                onChange={onChangeInput("square")}
                type="number"
                step="10"
                placeholder="м²"
              />
            </div>
          </div>
        </form>
        <div className="input__title">
          <form>
            <div className="price__form">
              <div>
                <span>Комнат в квартире:</span>
                <input
                  onChange={onChangeInput("room")}
                  type="number"
                  step="1"
                  max="10"
                  placeholder="3"
                />
                <span style={{ marginLeft: "10px" }}>Цена:</span>
                <input
                  onChange={onChangeInput("price")}
                  type="number"
                  step="200"
                  placeholder="сомони"
                />
              </div>
            </div>
          </form>
          <div className="add__image">
            <label>
              Добавьте изображение:
              <br />
              <span>до 9 изображений</span>
              <input
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png, image/jpeg, image/webp, image/jpg, image/gif"
              />
            </label>
            <br />

            <div className="error__length">
              {selectedImages.length > 0 &&
                (selectedImages.length > 9 ? (
                  <p className="error">
                    Вы не можете загрузить более 9 изображений! <br />
                    <span>
                      пожалуйста, удалите <b>{selectedImages.length - 9}</b> из
                      них
                    </span>
                  </p>
                ) : (
                  <></>
                ))}
            </div>
          </div>
          <div className="textarea">
            <textarea
              onChange={onChangeInput("description")}
              placeholder="написать описание здесь..."
              rows="4"
              cols="33"
              name="comment"
              form="usrform"
            ></textarea>
          </div>
          <div className="chexbox__form">
            Торг
            <input
              onChange={onChangeInput("checkedTrade")}
              checked={checkedTrade}
              type="checkbox"
              name=""
              id=""
            />
            Обмен
            <input
              onChange={onChangeInput("checkedExchange")}
              checked={checkedExchange}
              type="checkbox"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
      <div className="images__add">
        {selectedImages &&
          selectedImages.map((image, index) => (
            <div key={image} className="image_map">
              <img width={100} height={100} src={image} />
              <button
                className="delet__image"
                onClick={() =>
                  setSelectedImages(selectedImages.filter((e) => e !== image))
                }
              >
                <AiFillDelete />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
