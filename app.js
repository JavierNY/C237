//Route
app.get('/rooms', (req, res) => {
    try {
        const rooms = [
            {
                name: 'Yoga Studio',
                room_type: 'Yoga',
                capacity: 20,
                availability: true,
                location_name: 'Downtown Gym'
            },
            {
                name: 'Spinning Room',
                room_type: 'Cycling',
                capacity: 25,
                availability: false,
                location_name: 'Uptown Gym'
            }
        ];

        if (!rooms || rooms.length === 0) {
            return res.status(404).json({ 
                message: 'All fitness rooms are fully booked!' 
            });
        }

        res.render('rooms', { rooms });
    } catch (error) {
        console.error('Error accessing fitness rooms:', error);
        res.status(503).json({ 
            message: 'Our booking system is currently taking a break! Please try again in a few minutes.' 
        });
    }
});