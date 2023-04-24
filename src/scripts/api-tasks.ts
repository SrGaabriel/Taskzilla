export interface Task {
    name: string,
    description: string,
    completed: boolean
}

export async function getTasks(token: string): Promise<Task[] | null> {
    const response = await fetch('http://localhost:3001/api/users/@me/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    if (response.status == 401) {
        return null;
    }
    return await response.json();
}