//
//  ContentView.swift
//  Bruckner Device
//
//  Created by Spencer Jones on 2/22/25.
//

import SwiftUI

struct ContentView: View {
    
    @State var trackers: [String] = []
    
    var body: some View {
        NavigationStack {
            VStack {
                List {
                    ForEach(trackers, id: \.self) { tracker in
                        Text(tracker)
                    }
                }
                .listStyle(.insetGrouped)
            }
            .navigationTitle("The Bruckner Device")
            .toolbar {
                Button(action: {
                    trackers.append("new tracker")
                }, label: {
                    Text("New Tracker")
                })
            }
        }
    }
        
}

#Preview {
    ContentView()
}
