const api = 'http://localhost:8886/api/v1/expences'

export const getAllExpences = async () => {
    try {
        const response = await fetch(api);
        const ExpencesData = await response.json();
        return ExpencesData.data.expences; 
    }catch (err) {
            console.error(err);
    }
};

export const addExpence = async (data: string) => {
    try {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const sentData = await response.json();
        return sentData;
    } catch (err) {
        console.error(err);
        throw err; 
    }
};

export const deleteExpence = async (expenceId: string) => {
    try {
      const response = await fetch(`${api}/${expenceId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return true;
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

export const updateExpence = async (expenceId: string, expenceData: string) => {
    try {
      const response = await fetch(`${api}/${expenceId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenceData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  export const getExpencesByDate = async (firstDate: Date, secondDate: Date) => {
    try {
      const response = await fetch(`${api}/date-range/${firstDate}/${secondDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
      } else {
        const data = await response.json();
        console.log('Data received:', data);
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  