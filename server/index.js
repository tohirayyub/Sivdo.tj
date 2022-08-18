const express = require("express");
const cors = require("cors");
const postgres = require("pg");

const app = express();
app.use(cors());
app.use(express.json());
const port = 9009;

const { Client } = postgres;

app.post("/form-save", async (req, res) => {
  const clientFormData = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "981013200",
    database: "sivdo",
  });
  await clientFormData.connect();
  await clientFormData.query(
    "INSERT INTO formdata(selected, secondselected, title, region, floor, square, room, images, description, checkedtrade, checkedexchange, price, selectcity, name, email, telefon, radio, whatsapp) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)",
    [
      req.body.selected,
      req.body.secondSelected,
      req.body.title,
      req.body.region,
      req.body.floor,
      req.body.square,
      req.body.room,
      req.body.images,
      req.body.description,
      req.body.checkedTrade,
      req.body.checkedExchange,
      req.body.price,
      req.body.selectCity,
      req.body.name,
      req.body.email,
      req.body.telefon,
      req.body.radio,
      req.body.whatsapp,
    ]
  );
  await clientFormData.end();

  res.send("post saved!");
});

app.get("/post-list", async (req, res) => {
  const clientFormData = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "981013200",
    database: "sivdo",
  });
  await clientFormData.connect();
  const result = await clientFormData.query('SELECT * FROM "formdata"');
  await clientFormData.end();
  res.send(result.rows);
});

app.post("/post-delete", async (req, res) => {
  const postDelete = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "981013200",
    database: "sivdo",
  });
  await postDelete.connect();
  await postDelete.query(`DELETE FROM formdata WHERE id = ${req.body.id}`);
  await postDelete.end();
  console.log(req.body.id);
  res.send("delete");
});

app.listen(port, () => {
  console.log(`Express server is running at port ${port}`);
});
