import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesFooter from "./Companents/Categories+Footer";
import { HeaderCompanent } from "./Companents/header-top/HeaderCompanent";
import { LeftNavigationCompanent } from "./Companents/left-navigator/LeftNavigationCompanent";
import FilterCategories from "./Companents/rubrics - filter/Filter+Categories";
import { useState } from "react";
import Search from "./Companents/header-top/search/Search";
import MyAnnouncement from "./Companents/user/MyAnnouncement";
import MyPayments from "./Companents/user/MyPayments";
import Settings from "./Companents/user/Settings";
import LinksForUser from "./Companents/user/LinksForUser";
import UserAccaunt from "./Companents/user/UserAccaunt";

export default function App() {
  const [onOpenModalAdv, setOnOpenModalAdv] = useState(false);
  const [posts, setposts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <LeftNavigationCompanent
        setOnOpenModalAdv={setOnOpenModalAdv}
        onOpenModalAdv={onOpenModalAdv}
      />
      <HeaderCompanent
        posts={posts}
        setposts={setposts}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route path="/real-estate/all-rubric" element={<FilterCategories />} />
        <Route
          path="/"
          element={
            <CategoriesFooter
              setOnOpenModalAdv={setOnOpenModalAdv}
              onOpenModalAdv={onOpenModalAdv}
            />
          }
        />
        <Route
          path="/searching"
          element={<Search searchTerm={searchTerm} posts={posts} />}
        />
        <Route path="user">
          <Route index={true} element={<UserAccaunt />} />
          <Route path="my-adv" element={<MyAnnouncement posts={posts} />} />
          <Route path="my-payments" element={<MyPayments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes> 
    </div>
  );
}
