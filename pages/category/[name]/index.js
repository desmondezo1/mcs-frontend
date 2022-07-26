import { useEffect, useState } from "react";
import DynamicCategories from "../../../components/molecules/dynamicCategories";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { name } = router.query;
    const nameDecoded = decodeURIComponent(name);
    setTitle(nameDecoded);
  }, [router.query]);

  console.log(title);
  return (
    <>
      <DynamicCategories title={title} />
    </>
  );
}
