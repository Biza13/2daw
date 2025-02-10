import { useState } from "react";
import { useNavigate } from "react-router";

export default function Buscador() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate("?search=" + search)
        }}>
        <input
          type="text"
          id="buscador"
          name="buscador"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}
