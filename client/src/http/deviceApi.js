import { $authHost, $host } from "./index";

export const createType = async (type) => {
  const { data } = await $authHost.post("/api/types", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("/api/types");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("/api/brands", brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("/api/brands");
  return data;
};

export const createDevice = async (data) => {
  const response = await $authHost.post("/api/device", data);
  return response.data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("/api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const getOneDevice = async (id) => {
  const { data } = await $host.get(`/api/device/${id}`);
  return data;
};
