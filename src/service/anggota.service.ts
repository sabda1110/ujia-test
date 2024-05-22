export async function getAnggota() {
  try {
    const response = await fetch(import.meta.env.VITE_API_GET);
    if (response.ok) {
      const data = await response.json();
      return { status: true, statusCode: 200, data: data };
    } else {
      throw new Error('Failed to get anggota');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}

export async function addAnggota(data: MyApp.Pegawai) {
  try {
    const response = await fetch(import.meta.env.VITE_API_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return {
        status: true,
        statusCode: 200,
        data: 'Anggota added successfully'
      };
    } else {
      throw new Error('Failed to add anggota');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}

export async function editAnggota(data: MyApp.Pegawai, id: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_PUT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return {
        status: true,
        statusCode: 200,
        data: 'Anggota edit successfully'
      };
    } else {
      throw new Error('Failed to edit anggota');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}

export async function deleteAnggota(id: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_DELETE}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return {
        status: true,
        statusCode: 200,
        data: 'Anggota Delete successfully'
      };
    } else {
      throw new Error('Failed to Delete anggota');
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { status: false, statusCode: 500, data: err.message };
    } else {
      console.log(err);
    }
  }
}
