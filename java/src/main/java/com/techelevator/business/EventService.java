package com.techelevator.business;

import com.techelevator.dao.EventRepository;
import com.techelevator.model.Event;
import com.techelevator.model.EventDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public Event findByEventId(long eventId) {
        return eventRepository.findById(eventId);
    }

    public List<Event> findAllEventsByUserId(long userId) {
        return eventRepository.findAllByUserId(userId);
    }

    public Event createNewEvent(EventDTO eventDTO) {
        Event newEvent = new Event();
        newEvent.setUserId(eventDTO.getUserId());
        newEvent.setTitle(eventDTO.getTitle());
        newEvent.setDate(LocalDate.parse(eventDTO.getDate()));
        newEvent.setTime(Timestamp.valueOf(eventDTO.getDate() + " " + eventDTO.getTime() + ":00"));

        return eventRepository.save(newEvent);
    }
}
