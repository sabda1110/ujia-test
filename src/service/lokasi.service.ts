export async function getProvinsi() {
  try {
    const response = await fetch(
      'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json'
    );
    if (response.ok) {
      const data = await response.json();
      return { status: true, statusCode: 200, data: data };
    } else {
      throw new Error('Failed to get Provinsi');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}

export async function getLokasi(url: string, id: string) {
  try {
    const response = await fetch(`${url}/${id}.json`);
    if (response.ok) {
      const data = await response.json();
      return { status: true, statusCode: 200, data: data };
    } else {
      throw new Error('Failed to get Provinsi');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}
