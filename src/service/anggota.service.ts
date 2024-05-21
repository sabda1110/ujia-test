export async function getAnggota() {
  try {
    const response = await fetch(
      'https://61601920faa03600179fb8d2.mockapi.io/pegawai'
    );
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
