// Custom Hook useUpdateCartQuantity
import { useState, useEffect } from "react";
import { API } from "../../../utils/API";

export const useUpdateCartQuantity = (cartId, initialQuantity) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const updateQuantity = async () => {
      try {
        await API.patch(`/buyer/auth/update-cart-quantity/${cartId}`, { product_quantity: quantity },
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
      } catch (error) {
        console.error(error);
      }
    };

    updateQuantity();
  }, [quantity, cartId]);

  return [quantity, setQuantity];
};
