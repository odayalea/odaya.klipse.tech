const riddles = [
        {
            question: "הגיל שלי הוא 5 פעמים הגיל שלך. מהו הגיל שלי?",
            answer: "4",
        },
        {
            question: "2000+2=?",
            answer: "2002",
        }
        ];

export function getAllRiddles() {
    return {
        type: "GET_ALL_RIDDLES_SUCCESS",
        riddles,
    };
};
        
        


