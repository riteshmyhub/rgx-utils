export async function getBase64(file: File): Promise<string> {
   try {
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve, reject) => {
         reader.readAsDataURL(file);
         reader.onload = () => resolve(reader.result as string);
         reader.onerror = (error) => reject(error);
      });
      return base64;
   } catch (error) {
      throw error;
   }
}
