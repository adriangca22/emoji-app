import * as React from "react";
import Image from "next/image";
import {Inter} from "next/font/google";
import Layout from "@/components/layout";
import EmojiCard from "@/components/emojiCard";
import List from "@/components/list";
import emojisData from "@/data/emojis";
import {NextPage} from "next";
import Category from "@/components/category";

const Home: NextPage = () => {
  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 20)
  );
  function handleFilter(search: string) {
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData.slice(0, 20));
    }
  }
  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }
  return (
    <Layout>
      <h1 className="text-2xl gap-2 md:text-5xl font-bold text-gray-600 text-center tracking-wide">
        😀 Emoji Toons{" "}
      </h1>
      <div className="flex flex-col items-center">
        <input
          className="w-full focus:outline-none focus:border-cyan-500 focus:ring-1 max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md"
          id="name"
          type={"text"}
          placeholder="buscar  emoji"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 ">
        <Category
          handleFilter={handleFilterByCategory}
          emoji="😀"
          group={"Smileys & Emotion"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="🧔🏻"
          group={"People & Body"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="🐶"
          group={"Animals & Nature"}
        />
      
        <Category
          handleFilter={handleFilterByCategory}
          emoji="🍉"
          group={"Food & Drink"}
        />
     
        <Category
          handleFilter={handleFilterByCategory}
          emoji="⚽"
          group={"Activities"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="🌍"
          group={"Travel & Places"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="👓"
          group={"Objects"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="👿"
          group={"symbols"}
        />

        <Category
          handleFilter={handleFilterByCategory}
          emoji="🚩"
          group={"Flags"}
        />
      </div>
      <List emojis={filteredEmojis.slice(0, 50)} />
    </Layout>
  );
};
export default Home;
