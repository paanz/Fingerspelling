import React, { useState, useEffect } from 'react';
import { Button, Box, Text, VStack } from '@chakra-ui/react';

function Countdown() {
    const [count, setCount] = useState(3);
    const [isCounting, setIsCounting] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isCounting && count > 0) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
        } else if (count === 0) {
            clearInterval(interval);
            setShowQuiz(true);
            setIsCounting(false);
        }

        return () => clearInterval(interval);
    }, [isCounting, count]);

    const startGame = () => {
        setIsCounting(true);
        setCount(3);  // Ensure countdown starts from 3 each time
    };

    return (
        <VStack spacing={4} p={4}>
            {!showQuiz && (
                <>
                    {isCounting && (
                        <Text fontSize="4xl" fontWeight="bold">
                            {count}
                        </Text>
                    )}
                    {!isCounting && (
                        <Button colorScheme="teal" onClick={startGame}>
                            Start Game
                        </Button>
                    )}
                </>
            )}
            {showQuiz && (
                <Box p={5} shadow="md" borderWidth="1px">
                    <Text mb={2}>Quiz Starts Now!</Text>
                    {/* Quiz content here */}
                </Box>
            )}
        </VStack>
    );
}

export default Countdown;
