import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TradeCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      navigate(`/post-job/results?category=${encodeURIComponent(category)}`, {
        replace: true,
      });
    }
  }, [category, navigate]);

  return null;
}
